'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { FormEvent, LegacyRef, useRef, useState } from 'react';

export interface UserDetails {
  name: string;
  email: string;
  message: string;
}

const EnquiryForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Send a Post request to the
    const inputName = nameRef.current?.value ?? '';
    const inputEmail = emailRef.current?.value ?? '';

    if (inputName.length === 0) {
      setInvalidName(true);
      return;
    }

    if (!inputEmail.includes('@') || !inputEmail.includes('.com')) {
      setInvalidEmail(true);
      return;
    }

    const userDetails: UserDetails = {
      name: inputName,
      email: inputEmail,
      message: messageRef.current?.value || '',
    };

    const dialog = document.getElementById('my_modal_3') as HTMLDialogElement;
    dialog.showModal();

    if (nameRef.current && emailRef.current && messageRef.current) {
      nameRef.current.value = '';
      messageRef.current.value = '';
      emailRef.current.value = '';
    }

    try {
      await axios.post(`/api/users`, userDetails);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Box
      width={{
        sm: '100%',
        base: '100%',
        md: '55%',
      }}
      className="px-5 py-5 bg-inherit rounded-md shadow-sm bg-gradient-to-tr from-green-200 to-gray-200"
    >
      <Flex onSubmit={onSubmit} as={'form'} direction={'column'} gap={8}>
        <FormControl isRequired isInvalid={invalidName}>
          <FormLabel> Name</FormLabel>
          <EnquiryFormInput reference={nameRef} placeholder="Name" />
          <FormErrorMessage>Name must be longer.</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={invalidEmail}>
          <FormLabel>Email address</FormLabel>
          <EnquiryFormInput
            reference={emailRef}
            type="email"
            placeholder="xyzabc@email.com"
          />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            ref={messageRef}
            _placeholder={{ color: 'gray.600' }}
            _hover={{ borderColor: 'gray.800' }}
            focusBorderColor="gray.800"
            borderColor={'gray.800'}
            placeholder="The Message"
          />
        </FormControl>

        <Button
          mt={1}
          size={'md'}
          width={{
            sm: '100%',
            base: '100%',
            md: '20rem',
          }}
          backgroundColor={'#00b894'}
          _hover={{ backgroundColor: '#00b89490' }}
          type="submit"
          className="btn"
        >
          Submit
        </Button>

        <DialogModal />
      </Flex>
    </Box>
  );
};

const DialogModal = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-gradient-to-tr from-green-200 to-gray-200">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg text-center">
          HURRRAY! THANK YOU FOR VISITING US!
        </h3>
        <p className="mt-3 py-4 text-lg text-center">
          We have received your details and will get back to you soon.
        </p>
      </div>
    </dialog>
  );
};

const EnquiryFormInput = ({
  type = 'text',
  placeholder = '',
  reference = undefined,
}: {
  type?: string;
  placeholder?: string;
  reference?: LegacyRef<HTMLInputElement>;
}) => {
  return (
    <Input
      ref={reference ?? undefined}
      type={type}
      borderColor={'blackAlpha'}
      focusBorderColor="black"
      placeholder={placeholder}
      _placeholder={{
        color: 'gray.600',
      }}
      _hover={{
        borderColor: 'black',
      }}
    />
  );
};

export default EnquiryForm;
