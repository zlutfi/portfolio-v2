// In src/prismic-configuration.js
export const linkResolver = doc => {
  // URL for a homepage type
  if (doc.type === "homepage") {
    return "/"
  }
  // URL for a post type
  if (doc.type === "post") {
    return `/blog/${doc.uid}`
  }
  // URL for a project type
  if (doc.type === "project") {
    return `/projects/${doc.uid}`
  }
  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`
  }
  // URL for a static page type
  if (doc.type === "static_page") {
    return `/${doc.uid}`
  }

  // Backup for all other types
  return "/"
}
