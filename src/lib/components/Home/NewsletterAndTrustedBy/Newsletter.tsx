/* eslint-disable react/no-unknown-property */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { NewsletterData } from '@/lib/components/models/Home/Newsletter';

const { title, label } = NewsletterData;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Newsletter() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  interface FormData {
    name: string;
    email: string;
  }

  interface ChangeEvent {
    target: {
      id: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Por favor, preencha todos os campos antes de enviar.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/newsletter`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success('Informações enviadas com sucesso.', {
          position: 'top-right',
          autoClose: 3000,
        });
      } else {
        toast.error('Erro ao enviar informações.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('Erro no servidor', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
    setLoading(false);
    handleClose();
  };

  return (
    <div className="h-full xl:h-[320px] 2xl:h-[400px]">
      <form className="relative bottom-0 w-full p-5 font-sans lg:p-32 xl:bottom-[250px]">
        <h1 className="mt-10 w-full text-center text-2xl text-3xl lg:mt-0 lg:text-left lg:text-4xl">
          {title.name}
        </h1>
        <div className="mt-5 grid gap-5">
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
            >
              {label.name}
            </label>
            <style jsx>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                background-color: #ebebab !important;
                -webkit-box-shadow: 0 0 0px 1000px #ebebab inset !important;
                color: black !important; /* Garante que o texto fique preto */
                transition: background-color 5000s ease-in-out 0s;
              }
              
              }
            `}</style>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 peer block w-full appearance-none border-b border-black-100 bg-[#ebebab] pb-2.5 pt-4 text-sm focus:border-black-300 focus:outline-none focus:ring-0 dark:text-black-300"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 absolute top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#ebebab] text-sm text-black-200 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              style={{ backgroundColor: '#ebebab', pointerEvents: 'none' }}
            >
              {label.email}
            </label>
            <style jsx>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                background-color: #ebebab !important;
                -webkit-box-shadow: 0 0 0px 1000px #ebebab inset !important;
                color: black !important; /* Garante que o texto fique preto */
                transition: background-color 5000s ease-in-out 0s;
              }
              
              }
            `}</style>
          </div>
          <button
            type="button"
            className="w-28 rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300"
            onClick={handleOpen}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Enviar'}
          </button>
        </div>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-black-300">
          <div className="text-xl font-bold">Confirmação</div>
          <div>Tem certeza de que deseja enviar suas informações?</div>
          <div className="flex w-full justify-end gap-2">
            <button
              className="w-28 rounded-lg rounded-xl bg-white p-2 text-xl font-semibold text-black-300"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="w-28 rounded-lg rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
            >
              {loading ? <CircularProgress size={24} /> : 'Confirmar'}
            </button>
          </div>
        </Box>
      </Modal>
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
    </div>
  );
}
