import { ShowToast } from "@/components/utils/toast-notification";

//const apiUrl = process.env.BACKEND_API_URL || "http://127.0.0.1:1337/api/";
const endpoint = "contacts";

export const postContactForm = async ({ data, url }) => {
  // console.log("url= " + url);
  let resp: boolean;
  try {
    const response = await fetch(url + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });

    if (response.ok) {
      resp = true;
      ShowToast(
        "Sent successfully",
        "Thank you, message sent successfully. We'll get in touch ASAP!.",
        ""
      );
    } else {
      resp = false;
      ShowToast(
        "A problem occurred",
        "Sorry, a problem occurred while sending your message, please retry.",
        ""
      );
    }
  } catch (error) {
    resp = false;
    ShowToast(
      "We are facing issues",
      "Sorry, it appears like we're facing an issue right now, try again in 60 seconds.",
      ""
    );
    console.log("Error submitting data:", error);
  }
  return resp;
};
