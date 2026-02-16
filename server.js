import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Define o caminho da pasta dist
const DIST_DIR = join(__dirname, 'dist');

// Verificação de segurança: checa se o build rodou com sucesso
if (!fs.existsSync(DIST_DIR)) {
  console.error("ERRO CRÍTICO: A pasta 'dist' não foi encontrada.");
  console.error("Isso significa que o comando 'npm run build' falhou ou não foi executado.");
  console.log("Diretório atual:", __dirname);
  try {
    console.log("Arquivos na raiz:", fs.readdirSync(__dirname));
  } catch (e) {
    console.log("Não foi possível listar arquivos.");
  }
}

// Serve os arquivos estáticos da pasta dist
app.use(express.static(DIST_DIR));

// Redireciona qualquer rota não encontrada para o index.html (SPA)
app.get('*', (req, res) => {
  const indexPath = join(DIST_DIR, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // Fallback caso o index.html não exista
    res.status(500).send(`
      <h1>Erro no Servidor</h1>
      <p>O site não pôde ser carregado porque os arquivos de build não foram encontrados.</p>
      <p>Erro: ENOENT 'dist/index.html'</p>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving files from: ${DIST_DIR}`);
});