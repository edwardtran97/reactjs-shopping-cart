import axiosClient from "./axiosClient.js";

const postApi = {
  /**
   * Get a list of posts with pagination, sort, filter supported
   * @param {object} params
   */
  getAll(params) {
    const url = "/posts";
    return axiosClient.get(url, { params });
  },

  /**
   * Get a post by id
   * @param {string} postId
   */
  getById(postId) {
    const url = `/posts/${postId}`;
    return axiosClient.get(url);
  },

  /**
   * Add a new post
   * @param {object} post
   */
  add(post) {
    const url = '/posts';
    return axiosClient.post(url, post);
  },

  /**
   * Update a post
   * @param {object} post
   */
  update(post) {
    // Require id to process further
    if (!post.id) throw new Error("Missing id in post object");

    const url = `/posts/${post.id}`;
    return axiosClient.patch(url, post);
  },

  /**
   * Remove a post by id
   * @param {object} postId
   */
  remove(postId) {
    const url = `/posts/${postId}`;
    return axiosClient.delete(url);
  },
};

export default postApi;
