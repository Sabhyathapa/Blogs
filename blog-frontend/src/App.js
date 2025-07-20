import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './styles/animations.css';
import BlogPost from './components/BlogPost';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="logo">Narrate</Link>
          <div className="nav-links">
            <Link to="/category/all">All</Link>
            <Link to="/category/future">Future</Link>
            <Link to="/category/technology">Technology</Link>
            <Link to="/category/trends">Trends</Link>
            <Link to="/category/web3">Web3</Link>
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Thoughts, stories and<br />ideas from Narrate</h1>
        <div className="subscription-form">
          <input type="email" placeholder="Your email" />
          <button type="submit">Submit</button>
        </div>
        <p className="form-caption">Good stuff, no spam</p>
      </section>

      <section className="blog-posts">
        {/* Featured post */}
        <Link to="/post/1" className="featured-post-link">
          <article className="featured-post">
            <div className="post-image">
              <img src="https://framerusercontent.com/images/O0Oow29DdD6H0CTh7y2FgBYOhI.jpg" alt="AI Transformation" />
            </div>
            <div className="post-content">
              <h2>AI: Transforming industries one byte at a time</h2>
              <p>A look at how artificial intelligence is revolutionising various industries through automation and data analysis.</p>
              <div className="post-meta">
                <div className="author-info">
                  <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Author" className="author-avatar" />
                  <span>Technology</span>
                </div>
                <span>May 23, 2024</span>
              </div>
            </div>
          </article>
        </Link>

        {/* First row of horizontal posts */}
        <div className="blog-posts-horizontal">
          <Link to="/post/2" className="blog-post-link">
            <article className="blog-post">
              <div className="post-image">
                <img src="https://framerusercontent.com/images/OJIh2dBebo4eJ0uD2zq6bLHVrw.jpg" alt="Tech Innovators" />
              </div>
              <div className="post-content">
                <h2>Tech innovators: The minds behind the machines</h2>
                <p>Profiles of pioneering individuals who are driving technological advancements and innovation.</p>
                <div className="post-meta">
                  <div className="author-info">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Author" className="author-avatar" />
                    <span>Trends</span>
                  </div>
                  <span>May 16, 2024</span>
                </div>
              </div>
            </article>
          </Link>

          <Link to="/post/3" className="blog-post-link">
            <article className="blog-post">
              <div className="post-image">
                <img src="https://framerusercontent.com/images/cJrxsM5Q9Y9YqDxA6PdYURDtd0.jpg" alt="Mindfulness" />
              </div>
              <div className="post-content">
                <h2>Mindfulness in a fast-paced world</h2>
                <p>Discussing the importance and benefits of mindfulness practices in today's busy lifestyle.</p>
                <div className="post-meta">
                  <div className="author-info">
                    <img src="https://randomuser.me/api/portraits/women/36.jpg" alt="Author" className="author-avatar" />
                    <span>Future</span>
                  </div>
                  <span>May 1, 2024</span>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Second row of horizontal posts */}
        <div className="blog-posts-horizontal">
          <article className="blog-post">
            <div className="post-image">
              <img src="https://framerusercontent.com/images/24K9pq1vnWyFhOOFMwVh1oJqdA.jpg" alt="Digital Art" />
            </div>
            <div className="post-content">
              <h2>The rise of digital art in modern culture</h2>
              <p>Exploring how digital art is becoming a significant part of contemporary culture, influencing various forms of media and expression.</p>
              <div className="post-meta">
                <div className="author-info">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" className="author-avatar" />
                  <span>Web3</span>
                </div>
                <span>Apr 25, 2024</span>
              </div>
            </div>
          </article>

          <article className="blog-post">
            <div className="post-image">
              <img src="https://framerusercontent.com/images/ipgSqx6cAm64C7PM9n274hgTP0.jpg" alt="Street Fashion" />
            </div>
            <div className="post-content">
              <h2>How street fashion is shaping urban identities</h2>
              <p>A look at the impact of street fashion on the identity and culture of urban communities around the world.</p>
              <div className="post-meta">
                <div className="author-info">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" className="author-avatar" />
                  <span>Technology</span>
                </div>
                <span>Apr 2, 2024</span>
              </div>
            </div>
          </article>
        </div>

        {/* Third row of horizontal posts */}
        <div className="blog-posts-horizontal">
          <article className="blog-post">
            <div className="post-image">
              <img src="https://framerusercontent.com/images/IzpkJIHm2MwzggMCQGi6TNVjrQg.jpg" alt="Sustainable Living" />
            </div>
            <div className="post-content">
              <h2>Sustainable living: Small changes, big impact</h2>
              <p>Highlighting simple lifestyle changes that contribute significantly to environmental sustainability.</p>
              <div className="post-meta">
                <div className="author-info">
                  <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="Author" className="author-avatar" />
                  <span>Technology</span>
                </div>
                <span>April 22, 2024</span>
              </div>
            </div>
          </article>

          <article className="blog-post">
            <div className="post-image">
              <img src="https://framerusercontent.com/images/smkbWWNNLwbSv9heF9pf4h4muc.jpg" alt="Community Heroes" />
            </div>
            <div className="post-content">
              <h2>Everyday heroes: Stories of community champions</h2>
              <p>Celebrating individuals who make a difference in their communities through acts of kindness and selflessness.</p>
              <div className="post-meta">
                <div className="author-info">
                  <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Author" className="author-avatar" />
                  <span>Future</span>
                </div>
                <span>April 20, 2024</span>
              </div>
            </div>
          </article>
        </div>

        {/* Fourth row of horizontal posts */}
        <div className="blog-posts-horizontal">
          <article className="blog-post">
            <div className="post-image">
              <img src="https://framerusercontent.com/images/smkbWWNNLwbSv9heF9pf4h4muc.jpg" alt="Smart Homes" />
            </div>
            <div className="post-content">
              <h2>The future of smart homes: Convenience or intrusion?</h2>
              <p>A look at the potential benefits and privacy concerns associated with smart home technology.</p>
              <div className="post-meta">
                <div className="author-info">
                  <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="Author" className="author-avatar" />
                  <span>Future</span>
                </div>
                <span>Jan 16, 2024</span>
              </div>
            </div>
          </article>
        </div>
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
              <a href="/all">All</a>
              <a href="/web3">Web3</a>
              <a href="/trends">Trends</a>
              <a href="/future">Future</a>
              <a href="/technology">Technology</a>
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

export default App;