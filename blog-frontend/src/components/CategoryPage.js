import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Using the same blog data structure as in BlogPost component
const allBlogPosts = {
  "1": {
    id: "1",
    title: "AI: Transforming industries one byte at a time",
    subtitle: "A look at how artificial intelligence is revolutionising various industries through automation and data analysis.",
    image: "https://framerusercontent.com/images/O0Oow29DdD6H0CTh7y2FgBYOhI.jpg",
    category: "Technology",
    date: "May 23, 2024",
    author: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/24"
    }
  },
  "2": {
    id: "2",
    title: "Tech innovators: The minds behind the machines",
    subtitle: "Profiles of pioneering individuals who are driving technological advancements and innovation.",
    image: "https://framerusercontent.com/images/OJIh2dBebo4eJ0uD2zq6bLHVrw.jpg",
    category: "Trends",
    date: "May 16, 2024",
    author: {
      name: "Sarah Chen",
      avatar: "https://via.placeholder.com/24"
    }
  },
  "3": {
    id: "3",
    title: "Mindfulness in a fast-paced world",
    subtitle: "Discussing the importance and benefits of mindfulness practices in today's busy lifestyle.",
    image: "https://framerusercontent.com/images/cJrxsM5Q9Y9YqDxA6PdYURDtd0.jpg",
    category: "Future",
    date: "May 1, 2024",
    author: {
      name: "Maya Patel",
      avatar: "https://via.placeholder.com/24"
    }
  },
  "4": {
    id: "4",
    title: "The rise of digital art in modern culture",
    subtitle: "Exploring how digital art is becoming a significant part of contemporary culture.",
    image: "https://framerusercontent.com/images/24K9pq1vnWyFhOOFMwVh1oJqdA.jpg",
    category: "Technology",
    date: "April 28, 2024",
    author: {
      name: "Alex Rivera",
      avatar: "https://via.placeholder.com/24"
    }
  },
  "5": {
    id: "5",
    title: "Web3: The Future of the Internet",
    subtitle: "Understanding the potential of decentralized web technologies.",
    image: "https://framerusercontent.com/images/ipgSqx6cAm64C7PM9n274hgTP0.jpg",
    category: "Web3",
    date: "April 25, 2024",
    author: {
      name: "Chris Wong",
      avatar: "https://via.placeholder.com/24"
    }
  }
};

function CategoryPage() {
  const { category } = useParams();
  
  // Filter posts based on category
  const filteredPosts = Object.values(allBlogPosts).filter(post => {
    if (category === 'all') return true;
    return post.category.toLowerCase() === category.toLowerCase();
  });

  return (
    <>
      <section className="category-header">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Posts</h1>
      </section>

      <section className="blog-posts">
        {filteredPosts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="blog-post-link">
            <article className="blog-post">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <div className="post-meta">
                  <div className="author-info">
                    <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                    <span>{post.category}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Get the best sent to your inbox, every month</h2>
          </div>
          <div className="newsletter-form">
            <p>Expect weekly detailed reads about new technologies, growing trends, and the latest developments with Web3.</p>
            <div className="form-inputs">
              <input type="email" placeholder="Your email" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Pages</h3>
            <nav>
              <a href="/">Home</a>
              <a href="/subscribe">Subscribe</a>
              <a href="/404">404</a>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <nav>
              <Link to="/category/all">All</Link>
              <Link to="/category/web3">Web3</Link>
              <Link to="/category/trends">Trends</Link>
              <Link to="/category/future">Future</Link>
              <Link to="/category/technology">Technology</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <nav>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:contact@example.com">Email us</a>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Other</h3>
            <nav>
              <a href="/buy">Buy template</a>
              <a href="/templates">More templates</a>
              <a href="/framer">Made in Framer</a>
              <a href="/bryn">Built by Bryn</a>
            </nav>
          </div>
        </div>

        <div className="footer-logo">
          <h2>Narrate</h2>
        </div>
      </footer>
    </>
  );
}

export default CategoryPage; 