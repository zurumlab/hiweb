// List of content for the posts, including title, description, author, image URLs, poster image URLs, and actions
	
  // Add more posts as needed
//
	

   const contentList = [
  {
    title: "Fluffy Dog Breeds",
    desc: "Looking for someone to share pictures and stories of fluffy dog breeds. Let's spread some cuteness!",
    author: "John Doe",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/small-fluffy-dog-breeds-shih-tzu-1622652006.jpg_aj8jar.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/small-fluffy-dog-breeds-shih-tzu-1622652006.jpg_aj8jar.jpg",
    likeCount: 100,
    shareCount: 20,
    commentCount: 50
  },
  {
    title: "Grass Cutter Needed",
    desc: "A grass cutter is needed at St. James Baptist church. The lawn is getting messy!",
    author: "Jane Smith",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/_124800859_gettyimages-817514614_slyf4q.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/_124800859_gettyimages-817514614_slyf4q.jpg",
    likeCount: 150,
    shareCount: 30,
    commentCount: 70
  },
  {
    title: "Sick Dogs",
    desc: "My dogs suddenly stopped eating food. I don't know what the problem is. I need a veterinary Doctor to check on them. I'm offering $30.",
    author: "Bob Johnson",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/small-dog-owners-1_hodhrt.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/small-dog-owners-1_hodhrt.jpg",
    likeCount: 200,
    shareCount: 40,
    commentCount: 100
  },
  {
    title: "Adorable Puppy for Adoption",
    desc: "A cute little puppy is looking for a loving home. It's a mixed breed and is extremely friendly with kids. Contact me if interested.",
    author: "Sarah Adams",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/2138_koy8t2.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/2138_koy8t2.jpg",
    likeCount: 120,
    shareCount: 25,
    commentCount: 60
  },
  {
    title: "Lost Dog - Help Find Him",
    desc: "Our beloved dog went missing last night. He responds to the name 'Buddy' and was last seen near Oak Street. If found, please contact us.",
    author: "Mark Williams",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/cute-dog-headshot_b3oqje.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064578/cute-dog-headshot_b3oqje.jpg",
    likeCount: 180,
    shareCount: 35,
    commentCount: 80
  },
  {
    title: "Dog Training Classes",
    desc: "Is your dog having behavior issues? Join our dog training classes to teach them obedience and good manners. Limited slots available.",
    author: "Doggy Academy",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064579/gettyimages_1269161160_612x612scaler_cumdcr.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064579/gettyimages_1269161160_612x612scaler_cumdcr.jpg",
    likeCount: 90,
    shareCount: 15,
    commentCount: 40
  },
  {
    title: "Beautiful Calico Cat",
    desc: "Meet Whiskers, a gorgeous calico cat with unique markings. She's looking for a forever home filled with love and cuddles.",
    author: "Pet Adoption Center",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064579/KOA_Nassau_2697x1517_ozxvyd.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064579/KOA_Nassau_2697x1517_ozxvyd.jpg",
    likeCount: 190,
    shareCount: 30,
    commentCount: 70
  },
  {
    title: "Puppy's First Bath",
    desc: "Watch this heartwarming video of a puppy experiencing its first bath. It's both amusing and adorable!",
    author: "Animal Lovers",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064579/problems-older-dog_main_bxfgxn.jpg",
    posterImgUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1690064579/problems-older-dog_main_bxfgxn.jpg",
    likeCount: 220,
    shareCount: 45,
    commentCount: 90
  },
  // Add more posts as needed
];
 
    
    function createPostList() {
      const dynamicList = document.getElementById("dynamic-list");

      contentList.forEach((content) => {                                                                                                    // Create a new div element for the post
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        // Create an image element for the post image
        const imgElement = document.createElement("img");
        imgElement.src = content.imageUrl;
        imgElement.alt = content.title;
	imgElement.loading = "lazy";

        // Create a div to hold the post content
        const postContentDiv = document.createElement("div");
        postContentDiv.classList.add("post-content");

        // Create a div for the poster's image
        const posterImgDiv = document.createElement("div");
        const posterImgElement = document.createElement("img");
        posterImgElement.src = content.posterImgUrl;
        posterImgElement.loading = "lazy";
        posterImgElement.alt = content.author;
        posterImgElement.classList.add("poster-image");
        posterImgDiv.appendChild(posterImgElement);

        // Create a paragraph element for the post title
        const postTitleElement = document.createElement("p");
        postTitleElement.classList.add("post-title");
        postTitleElement.textContent = content.title;

        // Create a paragraph element for the post description
        const postDescElement = document.createElement("p");
        postDescElement.classList.add("post-desc");
        postDescElement.textContent = content.desc;

        // Create a paragraph element for the post author
        const postAuthorElement = document.createElement("p");
        postAuthorElement.classList.add("post-author");                                                                                                         postAuthorElement.textContent = "Posted by: " + content.author;

        // Create a div for the post actions
        const postActionsDiv = document.createElement("div");
        postActionsDiv.classList.add("post-actions");

        // Create the like button
        const likeButtonDiv = document.createElement("div");
        likeButtonDiv.classList.add("post-action", "like-button");
        const likeIcon = document.createElement("img");
        likeIcon.src = "https://image.flaticon.com/icons/png/128/1077/1077035.png";
        likeButtonDiv.appendChild(likeIcon);
        const likeCountSpan = document.createElement("span");
        likeCountSpan.textContent = content.likeCount + " Likes";
        likeButtonDiv.appendChild(likeCountSpan);

        // Create the share button
        const shareButtonDiv = document.createElement("div");
        shareButtonDiv.classList.add("post-action", "share-button");
        const shareIcon = document.createElement("img");
        shareIcon.src = "https://image.flaticon.com/icons/png/128/747/747361.png";
        shareButtonDiv.appendChild(shareIcon);
        const shareCountSpan = document.createElement("span");
        shareCountSpan.textContent = content.shareCount + " Shares";
        shareButtonDiv.appendChild(shareCountSpan);

        // Create the comment button
        const commentButtonDiv = document.createElement("div");
        commentButtonDiv.classList.add("post-action", "comment-button");
        const commentIcon = document.createElement("img");
        commentIcon.src = "https://image.flaticon.com/icons/png/128/1380/1380338.png";
        commentButtonDiv.appendChild(commentIcon);
        const commentCountSpan = document.createElement("span");
        commentCountSpan.textContent = content.commentCount + " Comments";
        commentButtonDiv.appendChild(commentCountSpan);

        // Append the buttons to the post actions div
        postActionsDiv.appendChild(likeButtonDiv);
        postActionsDiv.appendChild(shareButtonDiv);
        postActionsDiv.appendChild(commentButtonDiv);

        // Append the elements to the post content div
        postContentDiv.appendChild(posterImgDiv);
        postContentDiv.appendChild(postTitleElement);
        postContentDiv.appendChild(postDescElement);
        postContentDiv.appendChild(postAuthorElement);
        postContentDiv.appendChild(postActionsDiv);

        // Append the image and post content div to the post div
        postDiv.appendChild(imgElement);
        postDiv.appendChild(postContentDiv);

        // Append the post div to the dynamicList
        dynamicList.appendChild(postDiv);
	//add click events to the post items
	
	
	// Add onclick event listener to each postDiv element
	postDiv.onclick = function () {

  	// Replace the URL below with the actual URL of the page you want to open
  	const newPageUrl = 'http://127.0.0.1:41015/profile.html'; // Replace with your desired URL

  	window.open(newPageUrl);
	
	}


      });

    }



    // Call the function to create the list of posts dynamically
    createPostList();

