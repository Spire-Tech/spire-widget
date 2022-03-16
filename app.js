window.addEventListener('load', function(event) {
    const liveURL = "https://fj-lite-node.herokuapp.com";
    const localURL = "http://localhost:4000";
    const spire = document.querySelector("#spireWidget");
    const accessToken = spire.getAttribute("widget");


    let rating = 0;
    const media = [];


    const body = document.querySelector("body");
    const button = document.createElement("button");
    const overlay = document.createElement("div");
    overlay.classList.add("widget-overlay");
    const close = document.createElement("div");
    close.classList.add("close");
    close.textContent = "x";

      const formData = new FormData();
        

    const buttonImage = document.createElement("img");
    const buttonText = document.createElement("span");
    buttonImage.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986830/icons/icon-feedback_pvxbmu.svg";
    buttonText.textContent = "Leave a Feedback";
    button.classList.add("feedback-button");

    button.append(buttonImage, buttonText);
    const companyName = document.createElement("h3");
    companyName.classList.add("company-name");
    const companyLogoContainer = document.createElement("div");
    companyLogoContainer.classList.add("spire-logo");
    const companyLogo = document.createElement("img");
    companyLogo.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986832/icons/spire-logo_fwxm5y.svg";
    companyLogoContainer.appendChild(companyLogo);



    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widget");
    const back = document.createElement("div");
    back.classList.add("back");
    const backIcon = document.createElement("img");
    backIcon.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986830/icons/arrow_uhkexa.svg";
    back.appendChild(backIcon);
    const feedblockTitle = document.createElement("h4");
    feedblockTitle.classList.add("rating-title");
    const feedblockSubTitle = document.createElement("p");
    feedblockSubTitle.classList.add("rating-subTitle");


    const ratingBlock = document.createElement("div");
    ratingBlock.classList.add("rating-block");
    const ratingStars = document.createElement("div");
    ratingStars.classList.add("rating-stars");
    const ratingStarChecked = document.createElement("div");
    ratingStarChecked.classList.add("rating-stars");
    ratingStarChecked.style.display = "none";


    for (let index = 0; index < 5; index++) {
        const star = document.createElement("img");
        star.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986833/icons/star_mj9lej.svg";
        star.classList.add("stars");
        
        ratingStars.append(star);

        star.addEventListener("click", function(event) {
            rating = index + 1;
            emptyStar = null;
            console.log(rating);
            ratingStars.style.display = "none";

        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986832/icons/star-filled_vkvr3p.svg";
            ratingStarChecked.style.display = "flex";
            ratingStarChecked.append(star);
            console.log(rating);
        }
        for (let i = 5; i > rating; i--) {
            const star = document.createElement("img");
            star.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986833/icons/star_mj9lej.svg";
            ratingStarChecked.style.display = "flex";
            ratingStarChecked.append(star);
            console.log(rating);
        }


        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986832/icons/star-filled_vkvr3p.svg";
            ratingContainer.appendChild(star);
        }
        for (let i = 5; i > rating; i--) {
            const star = document.createElement("img");
            star.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986833/icons/star_mj9lej.svg";
            ratingContainer.appendChild(star);
        }

        setTimeout(() => {
            ratingBlock.style.display = "none";
            form.style.display = "block";
        }, 500);

        });
    }

    

    ratingBlock.append(back, feedblockTitle, feedblockSubTitle, ratingStars, ratingStarChecked);




    // const ratingContainer = document.createElement("div");
    // ratingContainer.classList.add("form-stars");
    // let emptyStarImage = null;
    // // {[...Array(5)].map((e, index) => (
    // //     <div className="w-9 cursor-pointer star" key={index}>
    // //       <Image src={index + 1 <= rating ? starFilled : star} key={index} onClick={() => selectStar(index)} />
    // //     </div>
    // //   ))}
    // [...Array(5)].forEach(index => {
    //     emptyStarImage = document.createElement("img")
    //     emptyStarImage.src = index + 5 <= false ? "./images/star.svg" : "./images/star-filled.svg";
    // });
    // ratingContainer.appendChild(emptyStarImage);

    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("form-stars");
    const emptyRatingStar = document.createElement("img");
    emptyRatingStar.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986833/icons/star_mj9lej.svg";
    

    
    
    
    


    const form = document.createElement("form");
    form.classList.add("form");
    
    const emailContainer = document.createElement("div");
    emailContainer.classList.add("form-input");
    const emailField = document.createElement("input");
    emailField.type = "email";
    emailField.name = "email";
    emailField.placeholder = "example@gmail.com";
    emailField.classList.add("form-input-input");
    emailField.setAttribute("id", "email");
    emailField.setAttribute("required", true);

    const emailLabel = document.createElement("label");
    const emailLabelSpan = document.createElement("span");
    emailLabelSpan.textContent = "What’s your email?";
    const emailLabelSmall = document.createElement("small");
    emailLabel.setAttribute("for", "email");
    emailLabel.classList.add("form-input-label");
    emailLabelSmall.textContent = "* Required";
    emailLabel.append(emailLabelSpan, emailLabelSmall);

    emailContainer.append(emailLabel, emailField);


    const commentContainer = document.createElement("div");
    commentContainer.classList.add("form-textarea");
    const commentLabel = document.createElement("label");
    const commentLabelSpan = document.createElement("span");
    commentLabel.setAttribute("for", "comment");
    commentLabelSpan.textContent = "Leave a comment?";
    const commentLabelSmall = document.createElement("small");
    commentLabel.setAttribute("for", "comment");
    commentLabel.classList.add("form-textarea-label");
    commentLabelSmall.textContent = "* Required";
    commentLabel.append(commentLabelSpan, commentLabelSmall);

    const commentField = document.createElement("textarea");
    commentField.placeholder = "What are you looking to see and what’s the problem it solves.";
    commentField.setAttribute("required", true);
    commentField.setAttribute("id", "comment");
    commentField.setAttribute("cols", "20");
    commentField.setAttribute("rows", "10");
    commentField.name = "comment";
    commentField.classList.add("form-textarea-textarea")

    commentContainer.append(commentLabel, commentField);




    const screenshotContainer = document.createElement("label");
    screenshotContainer.classList.add("image-input");
    const screenshotInput = document.createElement("input");
    screenshotInput.classList.add("custom-file-input");
    screenshotInput.type = "file";
    screenshotInput.multiple = true;
    screenshotInput.name = "screenshot";
    screenshotInput.placeholder = "Upload an Image";
    screenshotInput.classList.add("custom-file-input");
    screenshotInput.setAttribute("id", "screenshot");
    const screenshotIcon = document.createElement("img");
    screenshotIcon.src = "https://res.cloudinary.com/spire-tech/image/upload/v1646986831/icons/iconCamera_tweagv.svg";
    const screenshotSpan = document.createElement("span");
    screenshotSpan.textContent = "Upload Image(s)";
    screenshotContainer.append(screenshotInput, screenshotIcon, screenshotSpan);


    //submit-button
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("form-button");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    submitButton.classList.add("form-button-button")
    buttonContainer.appendChild(submitButton);


    const container = document.createElement("div");
    container.classList.add("container", "disable");
    const feedblocks = document.createElement("div");
    feedblocks.classList.add("feedblocks");
    
    
    

    button.addEventListener("click", function(event) {
        const overlay = document.querySelector(".widget-overlay");
        const container = document.querySelector(".container");
        const close = document.querySelector(".close");
        if (overlay.classList.contains('active') && container.classList.contains('active')) {
            overlay.classList.remove("active");
            overlay.classList.add("disable");
            container.classList.remove("active");
            container.classList.add("disable");
            close.classList.remove("active");
            close.classList.add("disable");
          } else {
            overlay.classList.remove("disable");
            overlay.classList.add("active");
            container.classList.remove("disable");
            container.classList.add("active");
            close.classList.remove("disable");
            close.classList.add("close", "active");
            
          }
    });


    close.addEventListener("click", function(event) {
      const overlay = document.querySelector(".widget-overlay");
      const container = document.querySelector(".container");
      const close = document.querySelector(".close");
      if (overlay.classList.contains('active') && container.classList.contains('active') && close.classList.contains('active')) {
          overlay.classList.remove("active");
          overlay.classList.add("disable");
          container.classList.remove("active");
          container.classList.add("disable");
          close.classList.remove("active");
          close.classList.add("disable");
        } else {
          overlay.classList.remove("active");
          overlay.classList.add("disable");
          container.classList.remove("active");
          container.classList.add("disable");
          close.classList.remove("active");
          close.classList.add("disable");
        }
  });
    

    const fetchWidget = async () => {
        try {
          const res = await fetch(`${liveURL}/widget/${accessToken}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json"
            },
          });

          const result = await res.json();
          console.log(result);

          const blocks = result.widget.validatedFeedBlocks;
          const businessName = result.widget.businessName;

          return {
              blocks,
              businessName
          }
          

        //   if(res.data.success === true) {
        //     setBlockLoader(false);
        //   }
        } catch (error) {
            console.log(error);
        //   if(error.response.status === 404) {
        //       console.log(error);
        //   }
        }
          
    }


    fetchWidget().then((res) => {
        console.log(res);
        const blocks = res.blocks;
        const businessName = res.businessName;

        companyName.textContent = businessName;

          blocks.forEach(function(block) {
              let image = null;
              if (block.slug === "ratings") {
                  image = "<img src='https://res.cloudinary.com/spire-tech/image/upload/v1646986830/icons/icon-emotion_gv8rbp.svg' />"
              } else if(block.slug === "issue-reports") {
                image = "<img src='https://res.cloudinary.com/spire-tech/image/upload/v1646986830/icons/icon-warning_znpv77.svg' />"
              } else {
                image = "<img src='https://res.cloudinary.com/spire-tech/image/upload/v1646986830/icons/icon-idea_ayvihm.svg' />"
              }
              console.log(block);
            feedblocks.innerHTML += `
                <div class="feedblock">
                    <div class="feedblock-img">
                        ${image}
                    </div>
                    <div>
                        <h4 class="feedblock-title">${block.title}</h4>
                        <p class="feedblock-subTitle">${block.subTitle}</p>
                        <span class="slug" style={display: "none"}>${block.slug}</span>
                        <span class="block" style={display: "none"}>${block.id}</span>
                    </div>
                </div>`;
          });
    });



        const imagePreview = document.createElement("div");
        imagePreview.classList.add("image-preview");
        

      

        

          form.append(ratingContainer, emailContainer, commentContainer, screenshotContainer, imagePreview, buttonContainer);
          widgetContainer.append(back, feedblockTitle, feedblockSubTitle, ratingBlock, form);

          back.addEventListener("click", function(event) {
            form.style.display = "none";
            back.style.display = "none";
            ratingBlock.style.display = "none";
            feedblockTitle.textContent = "";
            feedblockSubTitle.textContent = "";
            feedblocks.style.display = "flex";
            rating = 0;
            ratingStars.style.display = "flex";
            ratingStarChecked.style.display = "none";
            
          });

          let feedblockId = null;
          
          feedblocks.addEventListener("click", function(event) {
            console.log(event);
            feedblockId = event.path[2].querySelector(".block").textContent;
            console.log(feedblockId);
            console.log(event.path[2].querySelector(".block").textContent);
            if (event.path[2].querySelector(".slug").textContent === "ratings") {
                ratingBlock.style.display = "flex";
                feedblocks.style.display = "none";
                back.style.display = "flex";
                feedblockTitle.style.display = "block";
                feedblockSubTitle.style.display = "block";
                feedblockTitle.textContent = event.path[2].querySelector(".feedblock-title").textContent;
                feedblockSubTitle.textContent = event.path[2].querySelector(".feedblock-subTitle").textContent;
                screenshotContainer.style.display = "none";
                ratingContainer.style.display = "flex";
                
            } else if (event.path[2].querySelector(".slug").textContent === "issue-reports") {
                feedblockTitle.style.display = "block";
                feedblockSubTitle.style.display = "block";
                feedblockTitle.textContent = event.path[2].querySelector(".feedblock-title").textContent;
                feedblockSubTitle.textContent = event.path[2].querySelector(".feedblock-subTitle").textContent
                form.style.display = "block";
                back.style.display = "flex";
                feedblocks.style.display = "none";
                ratingContainer.style.display = "none";
                screenshotContainer.style.display = "flex";
            } else {
                feedblockTitle.style.display = "block";
                feedblockSubTitle.style.display = "block";
                feedblockTitle.textContent = event.path[2].querySelector(".feedblock-title").textContent;
                feedblockSubTitle.textContent = event.path[2].querySelector(".feedblock-subTitle").textContent
                form.style.display = "block";
                back.style.display = "flex";
                feedblocks.style.display = "none";
                screenshotContainer.style.display = "none";
                ratingContainer.style.display = "none";
            }
          });

          const submissionContainer = document.createElement("div");
          submissionContainer.classList.add("submission");
          const submissionFrame = document.createElement("iframe");
          submissionFrame.classList.add("submission-frame");
          submissionFrame.src = "https://embed.lottiefiles.com/animation/86372";
          const submissionTitle = document.createElement("h3");
          submissionTitle.classList.add("submission-title");
          submissionTitle.textContent = "Submission received!";
          const submissionSubTitle = document.createElement("p");
          submissionSubTitle.classList.add("submission-subTitle");
          submissionSubTitle.textContent = "Thank you for taking the time to let us know about your experience.";
          const submissionButton = document.createElement("button");
          submissionButton.classList.add("submission-button");
          submissionButton.setAttribute("type", "button");
          submissionButton.textContent = "Write Another Feedback";
          submissionButton.addEventListener("click", function(event) {
            feedblockTitle.style.display = "none";
            feedblockSubTitle.style.display = "none";
            ratingContainer.style.display = "none";
            submissionContainer.style.display = "none";
            ratingBlock.style.display = "none";
            form.style.display = "none";
            back.style.display = "none";
            widgetContainer.style.display = "block";
            feedblocks.style.display = "block";
            companyName.style.display = "block";
          });
          submissionContainer.append(submissionFrame, submissionTitle, submissionSubTitle, submissionButton);

          container.append(companyName, feedblocks, widgetContainer, submissionContainer, companyLogoContainer);

          overlay.append(close, container);


          const handleImageUpload = async (file) => {
            try {
              screenshotSpan.textContent = "Uploading...";
              submitButton.disabled = true;
              screenshotInput.setAttribute("disabled", true);
              const formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", "issue_reports");
              console.log(formData.file);
              const upload = await fetch("https://api.cloudinary.com/v1_1/spire-tech/upload", {
                method: "POST",
                body: formData,
                credentials: "same-origin",
              });
       
              const res = await upload.json();
              if(res.secure_url) {
                screenshotInput.setAttribute("disabled", false);
                submitButton.disabled = false;
                screenshotSpan.textContent = "Upload Image(s)";
              }
              console.log(res.secure_url);
              return res.secure_url;
            } catch (error) {
              console.log(error);
            }
        }


        

    
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          const FeatureFormData = new FormData(form);
          formSubmission(FeatureFormData);
        });

        async function formSubmission(form) {
          const formArr = []
          for (let [, value] of form) {
            formArr.push(value)
          }
          const [email, comment] = formArr;
          console.log(email, comment, rating);
          createFeedback(email, comment, rating, feedblockId);
          
        }


        const createFeedback = async (email, comment, rating, feedblockId) => {
          try {
            submitButton.textContent = "Submitting...";
            const upload = await fetch(`${liveURL}/feedback`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify({
                    feedBlockId: feedblockId,
                    customerEmail: email,
                    comment: comment,
                    media: media,
                    channel: "mobile",
                    rating: rating || 0
                }),
              });

            const res = await upload.json();
            console.log(res.success);
            if(res.success === true) {
              emailField.value = "";
              commentField.value = ""
              submitButton.textContent = "Submit";
              rating = 0;
              widgetContainer.style.display = "none";
              companyName.style.display = "none";
              submissionContainer.style.display = "flex";
            }
            
            return await upload.json();
            
          } catch (error) {
            console.log(error);
          }
      }

      const previewPhoto = async (files) => {
        console.log(files);
        if (files) {
          for (const file of files) {
            console.log(file);
              console.log(file);
              const src = URL.createObjectURL(file);
            const image = document.createElement("img");
            image.setAttribute('src', src);
            
            imagePreview.append(image);
            // imagePreview.innerHTML += `
            //   <img src=${src}>
            // `;
        }
        console.log(imagePreview);
      }
    }


        screenshotInput.addEventListener("change", async function(event) {
            console.log(event.target.files);
            await previewPhoto(event.target.files)
            console.log(screenshotInput.files);
            event.preventDefault();
                    
            if(event.target.files) {
                for (const file of event.target.files) {
                    console.log(file.name);
                    const regex = new RegExp('[^.]+$');
                    const extension = file.name.match(regex);

                    const result = await handleImageUpload(file);
                    media.push({
                      fileURL: result,
                      category: extension[0] === "svg" || "png" || "jpg" || "jpeg" || "gif" ? "image" : "video"
                    });
                }
            }
            console.log(media);
        });

    body.append(overlay, button);
});
