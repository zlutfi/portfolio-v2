// In src/prismic-configuration.js
export const linkResolver = doc => {
  // URL for a post type
  if (doc.type === "post") {
    return `/post/${doc.uid}`
  }
  // URL for a project type
  if (doc.type === "project") {
    return `/project/${doc.uid}`
  }
  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`
  }
  // Backup for all other types
  return "/"
}
