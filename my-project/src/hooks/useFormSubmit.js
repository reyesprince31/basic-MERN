import { useState } from "react";
import fetchData from "../utils/fetchData";

export default function useFormSubmit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (setData) => {
    try {
      const postData = {
        name,
        email,
      };

      const response = await fetch("http://localhost:5555/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(`Response: ${responseData.message}`);

        // Refetch data after successful submission
        const updatedData = await fetchData();
        setData(updatedData);

        setName("");
        setEmail("");
      } else {
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    handleSubmit,
  };
}
