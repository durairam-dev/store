// crudUtils.js
const createDocument = async (Model, data) => {
  const document = new Model(data);
  return await document.save();
};

const getDocuments = async (
  Model,
  query = {},
  projection = null,
  options = {}
) => {
  return await Model.find(query, projection, options);
};

const getDocumentById = async (Model, id) => {
  return await Model.findById(id);
};

const updateDocumentById = async (Model, id, data) => {
  return await Model.findByIdAndUpdate(id, data, { new: true });
};

const deleteDocumentById = async (Model, id) => {
  return await Model.findByIdAndDelete(id);
};

module.exports = {
  createDocument,
  getDocuments,
  getDocumentById,
  updateDocumentById,
  deleteDocumentById,
};
