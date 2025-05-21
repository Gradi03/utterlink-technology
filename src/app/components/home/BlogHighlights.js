"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blogPosts"; // Correct import path

// Dynamically import framer-motion (avoids server-side rendering issues)
const motion = dynamic(
  () => import("framer-motion").then((mod) => mod.motion),
  {
    ssr: false,
  }
);

const BlogHighlights = () => {
  // Take only the first 3 blog posts for the highlights
  const highlightedPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Latest Insights
          </h2>
          <p className="text-gray-300">
            Stay updated with connectivity trends and tips
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mt-4 md:mt-0"
        >
          Browse all articles <ArrowRight className="ml-1 h-5 w-5" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlightedPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group"
          >
            <Link href={`/blog/${post.id}`} className="block">
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center text-sm font-medium text-green-400">
                  Read more{" "}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogHighlights;
