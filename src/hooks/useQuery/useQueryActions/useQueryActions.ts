import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios/useAxios";

interface loginDataType {
  username: string;
  password: string;
}

interface LoginMutationType {
  url: string;
  mutationKey: string;
}

const axios = useAxios();

export const useLoginMutation = (loginprops: LoginMutationType) => {
  const { url, mutationKey } = loginprops;
  return useMutation({
    mutationKey: [mutationKey],
    mutationFn: (data: loginDataType) =>
      axios({ url, method: "POST", body: data }),
    onSuccess: () => {},
    onError: () => {},
  });
};

