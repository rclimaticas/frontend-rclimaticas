/* eslint-disable no-alert */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookie from 'js-cookie';

// Função para abrir o IndexedDB
export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('myApp', 3); // Versão 2
    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      console.log('Atualizando o banco de dados para a versão 2');
      if (!db.objectStoreNames.contains('user_data')) {
        db.createObjectStore('user_data', { autoIncrement: true });
        console.log('ObjectStore "user_data" criado com auto incremento');
      }
    };

    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };

    request.onerror = (event: any) => {
      reject(`Erro ao abrir o banco de dados: ${event.target.error}`);
    };
  });
};

export const saveUserData = async (value: any): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    const dataToSave = { ...value, loginDate: new Date().toISOString() };

    objectStore.add(dataToSave);

    transaction.oncomplete = () => {
      console.log('Dados do usuário salvos com sucesso!');
    };

    transaction.onerror = () => {
      console.error('Erro ao salvar dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao salvar dados no IndexedDB:', error);
  }
};

export const getUserData = async (): Promise<any> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readonly');
    const objectStore = transaction.objectStore('user_data');
    const request = objectStore.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const data = request.result ?? [];
        console.log('Todos os dados do usuário recuperados:', data);
        resolve(data.length > 0 ? data[data.length - 1] : null);
      };

      request.onerror = () => {
        console.error('Erro ao recuperar dados do usuário');
        reject('Erro ao recuperar dados');
      };
    });
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
    throw error;
  }
};

export const updateUserData = async (id: string, data: any) => {
  try {
    const db = await openDB();
    const tx = db.transaction('user_data', 'readwrite');
    const store = tx.objectStore('user_data');
    const existingUser = await store.get(id);
    if (existingUser) {
      console.log(`Atualizando usuário ${id} no IndexedDB...`);
      await store.put({ ...existingUser, ...data, id });
    } else {
      console.log(`Criando novo usuário ${id} no IndexedDB...`);
      await store.put({ ...data, id });
    }
    console.log(`Usuário ${id} atualizado com sucesso no IndexedDB!`);
  } catch (error) {
    console.error('Erro ao atualizar usuário no IndexedDB:', error);
  }
};

const listAllData = async () => {
  const db = await openDB();
  const transaction = db.transaction('user_data', 'readonly');
  const objectStore = transaction.objectStore('user_data');

  const request = objectStore.getAll();

  request.onsuccess = () => {
    console.log('Todos os dados armazenados no IndexedDB:', request.result);
  };
};

listAllData();

export const removeUserData = async (key: number): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');
    objectStore.delete(key);

    transaction.oncomplete = () => {
      console.log('Dados do usuário removidos com sucesso!');
    };

    transaction.onerror = () => {
      console.error('Erro ao remover dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar logout no backend');
    }

    console.log('Logout realizado com sucesso no backend.');

    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    objectStore.clear();

    Cookie.remove('authToken');

    transaction.oncomplete = () => {
      console.log('Todos os dados do usuário foram removidos com sucesso!');
      window.location.href = '/';
    };

    transaction.onerror = () => {
      console.error('Erro ao remover todos os dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao realizar logout:', error);
  }
};
