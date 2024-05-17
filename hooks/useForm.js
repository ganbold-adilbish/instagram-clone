import { useRouter } from "next/navigation";
import { useCallback, useReducer } from "react";

const reducer = (formState, action) => {
  return { ...formState, [action.name]: action.value };
};

export default function useForm(initialState, apiUrl) {
  const router = useRouter();
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formState }),
      });
      const data = await response.json();

      if (data.user) {
        router.push("/");
      }
    },
    [formState, router, apiUrl]
  );

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    if (name) {
      dispatch({ name, value });
    }
  }, []);

  return [formState, handleInputChange, handleSubmit];
}
