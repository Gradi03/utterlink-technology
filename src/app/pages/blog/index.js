import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import SEOHead from "@/components/shared/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEOHead
        title="Blog | Utterlink - Connectivity & Security Insights"
        description="Stay informed with the latest articles on connectivity solutions, security systems, and tech tips from Utterlink's experts."
        keywords="tech blog, connectivity tips, security insights, WiFi guides, CCTV information, tech advice"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Insights, guides, and news from our connectivity and security experts
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group hover:border-green-400/30 transition-all"
          >
            <div className="aspect-video bg-gray-800 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-400 mb-3">
                <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
              >
                Read More{" "}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-400 mb-8">
          Stay tuned for more articles coming soon. Subscribe to our newsletter
          to get the latest updates.
        </p>
      </div>
    </div>
  );
};

export default Blog;
