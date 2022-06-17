const liveURL = "https://spire-rest-api.herokuapp.com/user";
const spire = document.getElementById('_s-w')
const accessToken = spire.getAttribute('widget')

export const getWidget = async () => {
  try {
    const res = await fetch(`${liveURL}/fetch_widget/${accessToken}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    });

    const result = await res.json();
    return result
  } catch (e) {
    console.log(e)
  }
}

export const sendFeedback = async (request) => {
  const res = await fetch(`${liveURL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({
      widgetId: request.widgetId,
      businessId: request.businessId,
      feedBlockId: request.id,
      feedbackType: request.feedbackType,
      customerEmail: request.email,
      comment: request.comment,
      media: request.media,
      channel: "mobile",
      rating: request.rating
    }),
  })
  return await res.json()
}

export const handleImageUpload = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "issue_reports");
    const upload = await fetch("https://api.cloudinary.com/v1_1/spire-tech/upload", {
      method: "POST",
      body: formData,
      credentials: "same-origin",
    });

    const res = await upload.json();
    return res.secure_url;
  } catch (error) {
    console.log(error);
  }
}