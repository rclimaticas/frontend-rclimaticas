/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { getUserData, logout } from '@/services/UserStorage';

export const checkAndLogoutIfNewDay = async () => {
  try {
    const userData = await getUserData();

    if (!userData || !userData.loginDate) {
      return;
    }

    const lastLoginDate = new Date(userData.loginDate).toDateString();
    const today = new Date().toDateString();

    if (lastLoginDate !== today) {
      console.log('Novo dia detectado, deslogando usuário...');
      await logout();
    } else {
      console.log('Usuário com data igual, não há necessidade de deslogar.');
    }
  } catch (error) {
    console.error('Erro ao verificar a data do último login:', error);
  }
};
