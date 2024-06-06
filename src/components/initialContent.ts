export const initialContent = `
<header>
        <h1>Advantages of Tailwind CSS</h1>
      </header>
      <main>
        <article>
          <h2>What is Tailwind CSS?</h2>
          <p>
            Tailwind CSS is a utility-first CSS framework that provides a highly
            customizable, low-level set of CSS classes. Unlike traditional CSS
            frameworks that offer pre-designed components, Tailwind allows
            developers to style their web pages by composing small utility
            classes directly in their HTML.
          </p>
          <p>
            This approach enables developers to write more concise and more
            content about this is available in{" "}
            <a href="https://tailwindcss.com">tailwindcss.com </a>
          </p>

          <blockquote>
            "Tailwind CSS is more than a utility-first CSS framework; it's a
            powerful design tool that transforms how we build web applications."
          </blockquote>

          <h2>Advantages of Using Tailwind CSS</h2>
          <ul>
            <li>
              <strong>Highly Customizable:</strong> Tailwind CSS is designed to
              be highly configurable. You can tailor the framework to your
              specific needs by modifying the configuration file, which allows
              for custom colors, spacing, typography, and more.
            </li>
            <li>
              <strong>Utility-First Approach:</strong> By focusing on utility
              classes, Tailwind CSS encourages a consistent design system. This
              approach helps in maintaining a clean and readable codebase where
              styles are applied directly in the HTML, reducing the need for
              separate CSS files.
            </li>
            <li>
              <strong>Responsive Design:</strong> Tailwind CSS provides built-in
              responsive design utilities. You can easily apply different styles
              at different screen sizes using intuitive class names like{" "}
              <code>md:text-lg</code> or <code>lg:p-4</code>.
              <pre>
                <code>
                  &lt;div class="p-4 md:p-8 lg:p-12"&gt; &lt;p class="text-sm
                  md:text-base lg:text-lg"&gt;Responsive text size and
                  padding&lt;/p&gt; &lt;/div&gt;
                </code>
              </pre>
            </li>
            <li>
              <strong>Performance Optimized:</strong> Tailwind CSS includes a
              feature called "purging" that removes unused CSS classes from your
              production build, resulting in significantly smaller file sizes
              and faster load times.
            </li>
            <li>
              <strong>Consistent Styling:</strong> The utility-first approach
              promotes consistent styling across your project. Instead of
              reusing specific styles or components, you apply the same
              utilities wherever needed, ensuring a uniform look and feel.
            </li>
            <li>
              <strong>Great Documentation:</strong> Tailwind CSS has
              comprehensive and well-organized documentation. Whether you are a
              beginner or an experienced developer, the documentation provides
              clear examples and guides to help you get the most out of the
              framework.
              <pre>
                <code>
                  &lt;div class="text-center mt-8"&gt; &lt;a
                  href="https://tailwindcss.com/docs" class="text-blue-500
                  hover:underline"&gt;Check out the Tailwind CSS
                  Documentation&lt;/a&gt; &lt;/div&gt;
                </code>
              </pre>
            </li>
            <li>
              <strong>Community and Ecosystem:</strong> Tailwind CSS has a
              vibrant and growing community. There are numerous plugins, themes,
              and additional resources available, making it easier to extend the
              framework and integrate it with other tools and libraries.
            </li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Tailwind CSS offers a modern approach to styling web pages with its
            utility-first methodology. Its flexibility, customization options,
            and performance optimizations make it a powerful tool for developers
            looking to build responsive and consistent designs efficiently.
            Whether you're starting a new project or looking to improve an
            existing one, Tailwind CSS is worth considering for your next web
            development endeavor.
          </p>
        </article>
      </main>
      <footer>&copy; 2024 Your Blog Name</footer>`