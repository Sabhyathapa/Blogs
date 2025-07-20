import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';


function BlogPost() {
  const { id } = useParams();

  // Blog posts data - in a real app, this would come from an API
  const blogPosts = {
    "1": {
      title: "AI: Transforming industries one byte at a time",
      subtitle: "A look at how artificial intelligence is revolutionising various industries through automation and data analysis.",
      content: {
        introduction: "Artificial intelligence (AI) is revolutionising industries.",
        quote: "It automates processes, analyses data, and drives efficiency across various sectors.",
        aiInBusiness: {
          title: "AI in Business",
          content: "Businesses leverage AI to enhance operations. From predictive analytics to customer service chatbots, AI tools optimise performance and decision-making."
        },
        healthcareInnovations: {
          title: "Healthcare Innovations",
          content: "AI is transforming healthcare. It aids in diagnostics, personalises treatment plans, and streamlines administrative tasks, improving patient outcomes."
        },
        futureOfAI: {
          title: "Future of AI",
          content: "The future of AI holds exciting possibilities. Continuous advancements in machine learning and neural networks promise even greater innovations and societal benefits."
        }
      },
      image: "https://framerusercontent.com/images/O0Oow29DdD6H0CTh7y2FgBYOhI.jpg",
      category: "Technology",
      date: "May 23, 2024",
      author: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/24"
      }
    },
    "2": {
      title: "Tech innovators: The minds behind the machines",
      subtitle: "Profiles of pioneering individuals who are driving technological advancements and innovation.",
      content: {
        introduction: "Behind every groundbreaking technology lies the brilliant minds of innovators.",
        quote: "Innovation is not just about creating something new, but about solving real problems in meaningful ways.",
        pioneeringMinds: {
          title: "Pioneering Minds",
          content: "Meet the visionaries who are pushing the boundaries of what's possible in technology. From quantum computing to sustainable energy, these innovators are reshaping our future."
        },
        innovationProcess: {
          title: "The Innovation Process",
          content: "Understanding how great innovations come to life requires looking at both the creative process and the technical execution. It's a delicate balance of vision and practicality."
        },
        futureInnovators: {
          title: "Future Innovators",
          content: "The next generation of tech innovators is already emerging, bringing fresh perspectives and novel solutions to global challenges."
        }
      },
      image: "https://framerusercontent.com/images/OJIh2dBebo4eJ0uD2zq6bLHVrw.jpg",
      category: "Trends",
      date: "May 16, 2024",
      author: {
        name: "Sarah Chen",
        avatar: "https://via.placeholder.com/24"
      }
    },
    "3": {
      title: "Mindfulness in a fast-paced world",
      subtitle: "Discussing the importance and benefits of mindfulness practices in today's busy lifestyle.",
      content: {
        introduction: "In our rapidly evolving digital age, mindfulness has become more crucial than ever.",
        quote: "Mindfulness isn't about escaping the pace of modern life, but about finding clarity within it.",
        modernMindfulness: {
          title: "Modern Mindfulness",
          content: "Today's mindfulness practices are adapting to fit our busy lives. From quick meditation breaks to mindful technology use, there are many ways to stay present."
        },
        workplaceBalance: {
          title: "Workplace Balance",
          content: "Companies are increasingly recognizing the importance of mindfulness in maintaining employee wellbeing and productivity. Many are implementing mindfulness programs and spaces."
        },
        digitalDetox: {
          title: "Digital Detox",
          content: "Learning to disconnect periodically from our devices and reconnect with ourselves is becoming an essential skill in maintaining mental wellness."
        }
      },
      image: "https://framerusercontent.com/images/cJrxsM5Q9Y9YqDxA6PdYURDtd0.jpg",
      category: "Future",
      date: "May 1, 2024",
      author: {
        name: "Maya Patel",
        avatar: "https://via.placeholder.com/24"
      }
    }
  };

  const blogPost = blogPosts[id] || blogPosts["1"];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <motion.div
        className="blog-post-page"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <article className="single-post">
          <div className="post-header-section">
            <div className="post-divider"></div>
            <h1>{blogPost.title}</h1>
            <p className="post-subtitle">{blogPost.subtitle}</p>
            <div className="post-meta">
              <div className="author-info">
                <img src={blogPost.author.avatar} alt={blogPost.author.name} className="author-avatar" />
                <span>{blogPost.category}</span>
              </div>
              <span>{blogPost.date}</span>
            </div>
          </div>

          <motion.div
            className="post-main-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={blogPost.image} alt={blogPost.title} />
          </motion.div>

          <div className="post-content-wrapper">
            <motion.div
              className="post-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Introduction</h2>
              <p>{blogPost.content.introduction}</p>
            </motion.div>

            <motion.div
              className="post-quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>{blogPost.content.quote}</p>
            </motion.div>

            {Object.entries(blogPost.content)
              .filter(([key]) => !['introduction', 'quote'].includes(key))
              .map(([key, section]) => (
                <motion.div
                  key={key}
                  className="post-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </motion.div>
              ))}
          </div>
        </article>
      </motion.div>
    </>
  );
}

export default BlogPost;