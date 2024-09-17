import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  const post = {
    title: "Static Blog Post Title",
    image: "/assets/img/blog/blog-img.jpg",
    author: "John Doe",
    date: "September 17, 2024",
    content: `
      This is the content of the static blog post. You can write your blog content here and include HTML or Markdown as needed.
      It's a simple paragraph for demonstration.
    `,
    comments: [
      {
        name: "Alice",
        avatar: "/assets/img/avatar/avatar1.jpg",
        date: "September 10, 2024",
        content: "This is a comment on the blog post.",
      },
      {
        name: "Bob",
        avatar: "/assets/img/avatar/avatar2.jpg",
        date: "September 12, 2024",
        content: "Another comment about the post.",
      },
    ],
  };

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Current Item Name Here`</Link></li>
          </ol>
          <h2>{post.title}</h2>
        </div>
      </section>

      {/* Blog Single Section */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            {/* Main Blog Content */}
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                    width={800}
                    height={400}
                  />
                </div>
                <h2 className="entry-title">{post.title}</h2>
                <div className="entry-meta">
                  <ul>
                    <li><i className="bi bi-person"></i> <a href="#">{post.author}</a></li>
                    <li><i className="bi bi-clock"></i> <time>{post.date}</time></li>
                    <li><i className="bi bi-chat-dots"></i> <a href="#">2 Comments</a></li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>{post.content}</p>
                </div>
              </article>

              {/* Comments Section */}
              <BlogComments comments={post.comments} />
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Blog Comments Component
function BlogComments({ comments }) {
  return (
    <div className="blog-comments">
      <h4 className="comments-count">{comments.length} Comments</h4>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="d-flex">
            <div className="comment-img">
              <img src={comment.avatar} alt="Commenter Avatar" />
            </div>
            <div>
              <h5>{comment.name} <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
              <time>{comment.date}</time>
              <p>{comment.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Blog Sidebar Component
function BlogSidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Search</h3>
      <div className="sidebar-item search-form">
        <form action="">
          <input type="text" />
          <button type="submit"><i className="bi bi-search"></i></button>
        </form>
      </div>

      <h3 className="sidebar-title">Categories</h3>
      <div className="sidebar-item categories">
        <ul>
          <li><Link href="#">General <span>(25)</span></Link></li>
          <li><Link href="#">Lifestyle <span>(12)</span></Link></li>
          <li><Link href="#">Travel <span>(5)</span></Link></li>
        </ul>
      </div>

      <h3 className="sidebar-title">Recent Posts</h3>
      <div className="sidebar-item recent-posts">
        <div className="post-item clearfix">
          <img src="/assets/img/blog/blog-recent-1.jpg" alt="" />
          <h4><Link href="#">Recent Post 1</Link></h4>
          <time datetime="2020-01-01">Jan 1, 2020</time>
        </div>
        <div className="post-item clearfix">
          <img src="/assets/img/blog/blog-recent-2.jpg" alt="" />
          <h4><Link href="#">Recent Post 2</Link></h4>
          <time datetime="2020-01-01">Jan 1, 2020</time>
        </div>
      </div>
    </div>
  );
}
