import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/shared/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { useRouter } from "next/router";

const BlogPost = ({ post }) => {
  const router = useRouter();

  // If the page is still being generated, show loading
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If post not found, show error
  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center text-green-400 hover:text-green-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to all blog posts
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <SEOHead
        title={`${post.title} | Utterlink Blog`}
        description={post.excerpt}
        keywords={`${post.category}, connectivity, security, tech blog, utterlink`}
      />

      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-green-400 hover:text-green-300 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
        </Link>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="aspect-[21/9] bg-gray-800 rounded-lg overflow-hidden mb-8"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies tincidunt, nisl nisl aliquam nisl, nec
            ultricies nisl nisl nec ultricies. Sed euismod, nisl nec ultricies
            tincidunt, nisl nisl aliquam nisl, nec ultricies nisl nisl nec
            ultricies.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Key Takeaways</h2>

          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">
              Implement proper security protocols for your home network
            </li>
            <li className="mb-3">
              Regular maintenance ensures optimal performance
            </li>
            <li className="mb-3">
              Professional installation saves time and prevents issues
            </li>
            <li className="mb-3">
              Consider future expansion when planning your setup
            </li>
          </ul>

          <p className="text-gray-300 mb-6">
            Sed euismod, nisl nec ultricies tincidunt, nisl nisl aliquam nisl,
            nec ultricies nisl nisl nec ultricies. Sed euismod, nisl nec
            ultricies tincidunt, nisl nisl aliquam nisl, nec ultricies nisl nisl
            nec ultricies.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>

          <p className="text-gray-300">
            In conclusion, staying informed about the latest connectivity trends
            and security practices is essential for maintaining a reliable and
            secure network. Whether you're upgrading your home WiFi or
            implementing a business security solution, the right approach makes
            all the difference.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Generate the static paths for all blog posts at build time
export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Return 404 for paths not returned by getStaticPaths
  };
}

// Get the data for each blog post at build time
export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  // If post not found, return 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
