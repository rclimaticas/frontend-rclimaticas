/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable consistent-return */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Skeleton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { ethers } from 'ethers';
import Cookie from 'js-cookie';
import localforage from 'localforage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import SkeletonLoginForm from '@/lib/components/Login/SkeletonLoginForm';
import { TOKEN_KEY } from '@/middleware';
import { saveImpactData } from '@/services/ImpactsStorage';
import { openDB } from '@/services/UserStorage';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const fetchAndStoreUserImpact = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/impacts/user`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao buscar impactos do usuário');
      }

      const impactData = await response.json();
      await saveImpactData('userImpact', impactData);

      console.log('Dados do impacto armazenados localmente:', impactData);
    } catch (error) {
      console.error('Erro ao buscar e armazenar dados do impacto:', error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;

        if (!access_token) {
          console.error('ID Token não recebido!');
          return;
        }

        console.log('ID Token enviado para o backend:', access_token);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tokenGoogle: access_token }),
            credentials: 'include',
          }
        );

        const data = await response.json();

        const { user } = data;
        console.log('Dados de login recebidos:', user);

        // Adicionando a data de login
        const userWithLoginDate = {
          ...user,
          loginDate: new Date().toISOString(), // Adiciona a data de login
        };

        const db = await openDB();
        const transaction = db.transaction('user_data', 'readwrite');
        const objectStore = transaction.objectStore('user_data');

        const addRequest = objectStore.add(userWithLoginDate); // Salva os dados com a data de login

        await new Promise((resolve, reject) => {
          addRequest.onsuccess = () => resolve(true);
          addRequest.onerror = (e) => {
            console.error('Erro ao salvar no IndexedDB:', e);
            reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
          };
        });

        const { token } = data.user;
        console.log('Token recebido:', token);
        await fetchAndStoreUserImpact();

        if (token) {
          Cookie.set(TOKEN_KEY, token, { expires: 7 });
          toast.success('Login realizado com sucesso!', {
            position: 'top-right',
            autoClose: 3000,
          });
        } else {
          console.error('Token não recebido na resposta!');
        }

        setTimeout(() => {
          router.push('/');
        }, 3000);
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    },
    onError: () => console.error('Erro no login com o Google'),
  });

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const { id_token } = tokenResponse;
  //       const response = await axios.post(
  //         'https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/auth/google',
  //         { token: id_token }
  //       );

  //       if (response.status !== 200) {
  //         throw new Error(
  //           response.data?.message || 'Ocorreu um erro inesperado.'
  //         );
  //       }

  //       const profileResponse = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
  //         {
  //           method: 'GET',
  //           credentials: 'include',
  //         }
  //       );

  //       if (!profileResponse.ok) {
  //         throw new Error('Erro ao buscar os dados do perfil.');
  //       }

  //       const userData = await profileResponse.json();
  //       console.log('Dados de login recebidos:', userData);

  //       const db = await openDB();
  //       const transaction = db.transaction('user_data', 'readwrite');
  //       const objectStore = transaction.objectStore('user_data');

  //       const addRequest = objectStore.add(userData);

  //       await new Promise((resolve, reject) => {
  //         addRequest.onsuccess = () => resolve(true);
  //         addRequest.onerror = (e) => {
  //           console.error('Erro ao salvar no IndexedDB:', e);
  //           reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
  //         };
  //       });

  //       const { token } = response.data;

  //       Cookie.set(TOKEN_KEY, token, { expires: 7 });
  //       toast.success('Login realizado com sucesso!', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //       });

  //       setTimeout(() => {
  //         router.push('/');
  //       }, 3000);
  //     } catch (error) {
  //       console.error('Erro no processo de login:', error);
  //     }
  //   },
  //   onError: () => console.error('Erro no login com o Google'),
  // });

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // const signIn = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     try {
  //       const token = response.access_token;

  //       const serverResponse = await axios.post(
  //         'https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/auth/google',
  //         {
  //           token,
  //         }
  //       );
  //       toast.success('Login realizado com sucesso!', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //       });
  //       setTimeout(() => {
  //         router.push('/');
  //       }, 3000);
  //     } catch (error) {
  //       console.error('Erro ao autenticar:', error.response?.data?.error);
  //     }
  //   },
  //   onError: (error) => {
  //     console.error('Erro ao tentar fazer login com o Google:', error);
  //   },
  // });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
  //   setLoading(true);

  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(loginData),
  //       credentials: 'include',
  //     });

  //     console.log(response);

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || 'Ocorreu um erro inesperado.');
  //     }

  //     const profileResponse = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
  //       {
  //         method: 'GET',
  //         credentials: 'include',
  //       }
  //     );

  //     if (!profileResponse.ok) {
  //       throw new Error('Erro ao buscar os dados do perfil.');
  //     }

  //     const userData = await profileResponse.json();
  //     // console.log('Dados de login recebidos:', userData);

  //     await localforage.setItem('user', userData);

  //     toast.success('Login realizado com sucesso!', {
  //       position: 'top-right',
  //       autoClose: 3000,
  //     });

  //     setTimeout(() => {
  //       router.push('/');
  //     }, 1000);
  //   } catch (err: any) {
  //     setError(err.message || 'Ocorreu um erro inesperado.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ocorreu um erro inesperado.');
      }

      const profileResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );

      if (!profileResponse.ok) {
        throw new Error('Erro ao buscar os dados do perfil.');
      }
      await fetchAndStoreUserImpact();

      const userData = await profileResponse.json();
      console.log('Dados de login recebidos:', userData);

      const userDataWithLoginDate = {
        ...userData,
        loginDate: new Date().toISOString(), // add login date
      };

      const db = await openDB();
      const transaction = db.transaction('user_data', 'readwrite');
      const objectStore = transaction.objectStore('user_data');

      const addRequest = objectStore.add(userDataWithLoginDate);

      await new Promise((resolve, reject) => {
        addRequest.onsuccess = () => resolve(true);
        addRequest.onerror = (e) => {
          console.error('Erro ao salvar no IndexedDB:', e);
          reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
        };
      });

      const responseData = await response.json();
      const { token } = responseData;

      Cookie.set(TOKEN_KEY, token, { expires: 7 });
      toast.success('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setTimeout(() => {
        router.push('/');
      }, 800);
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  // const handleMetaMaskLogin = async () => {
  //   if (window.ethereum) {
  //     try {
  //       setLoading(true);

  //       const provider = new ethers.BrowserProvider(window.ethereum);

  //       const signer = await provider.getSigner();

  //       await window.ethereum.request({ method: 'eth_requestAccounts' });

  //       const address = await signer.getAddress();

  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
  //         {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({ metamaskAddress: address }),
  //           credentials: 'include',
  //         }
  //       );

  //       const data = await response.json();

  //       const { user } = data;
  //       console.log('Dados de login recebidos:', user);
  //       const db = await openDB();
  //       const transaction = db.transaction('user_data', 'readwrite');
  //       const objectStore = transaction.objectStore('user_data');

  //       const addRequest = objectStore.add(user);

  //       await new Promise((resolve, reject) => {
  //         addRequest.onsuccess = () => resolve(true);
  //         addRequest.onerror = (e) => {
  //           console.error('Erro ao salvar no IndexedDB:', e);
  //           reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
  //         };
  //       });

  //       const { token } = data.user;
  //       console.log('Token recebido:', token);

  //       if (token) {
  //         Cookie.set(TOKEN_KEY, token, { expires: 7 });
  //       } else {
  //         console.error('Token não recebido na resposta!');
  //       }

  //       toast.success('Login com MetaMask bem-sucedido!', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //       });

  //       router.push('/');
  //       }
  //     } catch (err) {
  //       console.error('Erro ao conectar com MetaMask:', err);
  //       toast.error('Erro ao tentar fazer login com MetaMask.', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     toast.error('MetaMask não detectado. Por favor, instale o MetaMask.', {
  //       position: 'top-right',
  //       autoClose: 3000,
  //     });
  //   }
  // };

  // carregar página

  const handleMetaMaskLogin = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const address = await signer.getAddress();

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/metamask`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ metamaskAddress: address }),
            credentials: 'include',
          }
        );

        const data = await response.json();

        console.log('Resposta do backend:', data);

        const { user, token } = data;

        console.log('Dados de login recebidos:', user);

        // Adicionando a data de login
        const userWithLoginDate = {
          ...user,
          loginDate: new Date().toISOString(), // Adiciona a data de login
        };

        const db = await openDB();
        const transaction = db.transaction('user_data', 'readwrite');
        const objectStore = transaction.objectStore('user_data');

        const addRequest = objectStore.add(userWithLoginDate); // Salva os dados com a data de login

        await new Promise((resolve, reject) => {
          addRequest.onsuccess = () => resolve(true);
          addRequest.onerror = (e) => {
            console.error('Erro ao salvar no IndexedDB:', e);
            reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
          };
        });

        await fetchAndStoreUserImpact();

        if (token) {
          Cookie.set(TOKEN_KEY, token, { expires: 7 });
          toast.success('Login realizado com sucesso!', {
            position: 'top-right',
            autoClose: 3000,
          });
          console.log('Token recebido:', token);
        } else {
          console.error('Token não recebido na resposta!');
        }

        router.push('/');
      } catch (err) {
        console.error('Erro ao conectar com MetaMask:', err);
        toast.error('Erro ao tentar fazer login com MetaMask.', {
          position: 'top-right',
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast.error('MetaMask não detectado. Por favor, instale o MetaMask.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      const handleLoad = () => {
        setIsPageLoaded(true);
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);
  return (
    <div className="w-full">
      {isPageLoaded ? (
        <div className="flex w-full items-center justify-center font-roboto">
          <div className="min-w-4xl grid w-[500px] rounded-3xl bg-white shadow-none lg:shadow-2xl">
            <form
              className="flex w-full flex-col items-center justify-center gap-6 p-10 font-roboto text-black-200 lg:gap-10"
              onSubmit={handleSubmit}
            >
              {/* <div className="flex w-full justify-center text-2xl">
            <Image
              alt="Logo"
              width="80"
              height="80"
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
            />
          </div> */}
              <div className="flex flex-row items-center justify-center gap-5">
                <div>
                  {/* <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  try {
                    const { credential } = credentialResponse;
                    const response = await axios.post(
                      'https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/auth/google',
                      {
                        token: credential,
                      }
                    );
                    toast.success('Login realizado com sucesso!', {
                      position: 'top-right',
                      autoClose: 3000,
                    });
                    setTimeout(() => {
                      router.push('/');
                    }, 3000);
                  } catch (error) {
                    // console.error(
                    //   'Erro ao autenticar:',
                    //   error.response?.data?.error
                    // );
                  }
                }}
                onError={() => console.error('Erro no login com o Google')}
              /> */}
                  <button
                    onClick={() => login()}
                    className="flex items-center justify-center rounded-full border-2 border-black-300 border-opacity-10 hover:bg-orange"
                  >
                    <img
                      className="p-1"
                      src="/assets/google.png"
                      alt="Google"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleMetaMaskLogin}
                    disabled={loading}
                    className="flex items-center justify-center rounded-full border-2 border-black-300 border-opacity-10 hover:bg-orange"
                  >
                    <img
                      className="p-1"
                      src="/assets/metamask.png"
                      alt="Google"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </button>
                </div>
              </div>
              <div className="custom-toast-container">
                <ToastContainer />
                <style jsx>
                  {`
                    .custom-toast-container {
                      position: fixed !important;
                      top: 0;
                      right: 0;
                      z-index: 9999;
                      pointer-events: none; /* Para evitar que interaja com outros elementos */
                    }
                  `}
                </style>
              </div>
              <div className="flex items-center justify-between">
                <span className="mr-3 w-[40px] border-b" />
                <a href="#" className="">
                  ou faça login com o email
                </a>
                <span className="ml-3 w-[40px] border-b" />
              </div>
              <CustomTextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={handleLogin}
                value={loginData.email}
              />
              <CustomTextField
                required
                id="password"
                name="password"
                label="Senha"
                variant="outlined"
                fullWidth
                onChange={handleLogin}
                value={loginData.password}
              />
              <a
                href="/register"
                className="w-full cursor-pointer text-center hover:underline"
              >
                Não tem registro ainda? Se registre aqui{' '}
              </a>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
              >
                {loading ? <CircularProgress size="30px" /> : 'ENTRAR'}
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <div className="flex w-full items-center justify-center">
              <a href="/" className="text-center underline">
                Voltar para a página inicial
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <SkeletonLoginForm />
        </div>
      )}
    </div>
  );
}
