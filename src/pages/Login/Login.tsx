import React from "react";
import {
    Center,
    Stack,
    Input,
    Button,
    Text,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalContent,
    useDisclosure,
    ModalCloseButton,
    ModalBody

}
    from  '@chakra-ui/react'
import {useForm} from "react-hook-form";

interface FormData {
    email: string;
    name: string;
}

export function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({mode: "onChange"});
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <>
            <Center h={'100vh'}>
                <Stack spacing={[4, 6, 8, 12]} bg={'brand.800'} p={'33px 47px'} color={'brand.0'} borderRadius={'12px'} w={'400px'} border={'1px solid gray'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder={'Логин'}
                            type="text"
                            id="email"
                            mb={[4, '20px']}
                            {...register('email',{
                                required: "Email обязателен",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Некорректный email"
                                }
                            })}
                        />
                        {errors.email && <Text color={'red.400'}>{errors.email.message}</Text>}
                        <Input placeholder={'Пароль'}
                           mb={4}
                           type="text"
                            id="name"
                            {...register('name',{
                                required: "Имя обязательно",
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: "Некорректное имя"
                                }
                            })}
                        />
                        {errors.name && <Text color={'red.400'}>{errors.name.message}</Text>}

                        <Button colorScheme='purple' >Зарегистрироваться</Button>
                    </form>
                </Stack>

                {/*<Button onClick={onOpen}>Open Modal</Button>*/}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            dasdasd
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='brandLight'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    );
}