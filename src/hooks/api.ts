import { useMutation } from "react-query";
import { api } from "../lib/api";
import { message } from "antd";
import { AxiosError } from "axios";

import type { ICreateUserContract } from "../@types/api";

export function useCreateUser() {
  return useMutation(
    "createUser",
    (formData: ICreateUserContract) => {
      return api.post("/users", formData);
    },
    {
      onSuccess: () => {
        message.success("Usuário cadastrado com sucesso!");
      },
      onError: (e: AxiosError<string>) => {
        message.error(e.response?.data ?? "Ops! falha ao criar usuário");
      },
    }
  );
}
