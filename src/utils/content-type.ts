export enum ContentType {
  // Formatos comuns de resposta
  JSON = "application/json",
  TEXT = "text/plain",
  HTML = "text/html",
  XML = "application/xml",

  // Formulários
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Arquivos e binários
  OCTET_STREAM = "application/octet-stream",
  PDF = "application/pdf",
  ZIP = "application/zip",
  PNG = "image/png",
  JPEG = "image/jpeg",
  SVG = "image/svg+xml",

  // Específicos de API
  GRAPHQL = "application/graphql",
  NDJSON = "application/x-ndjson", // streaming JSON

  // Outros
  CSV = "text/csv",
  JAVASCRIPT = "application/javascript",
  WEBM = "video/webm",
}
