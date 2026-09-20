// @ts-check
/**
 * Plugin rehype: rebaixa para texto simples os links internos do Markdown cujo
 * destino ainda não existe no site. Um hub pode linkar para os spokes do seu
 * cluster desde já — o link fica ativo quando o spoke é publicado e é apenas
 * texto enquanto não existe, evitando link interno morto.
 *
 * Só afeta links de página internos (href começa com "/" e termina com "/").
 * Âncoras (#), links externos e assets (/rss.xml, .png…) passam intactos.
 */

import { publishedPaths } from './published-paths.mjs';

/** Remove o nó <a>, mantendo seus filhos (o texto) no lugar. */
function unwrap(node, index, parent) {
  parent.children.splice(index, 1, ...node.children);
}

export default function rehypeInternalLinks() {
  const validos = publishedPaths();

  return (tree) => {
    const visit = (node, index, parent) => {
      if (node.type === 'element' && node.tagName === 'a' && parent && typeof index === 'number') {
        const href = node.properties?.href;
        if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
          const caminho = href.split('#')[0].split('?')[0];
          // só páginas internas (terminam em /); assets e arquivos passam
          if (caminho.endsWith('/') && !validos.has(caminho)) {
            unwrap(node, index, parent);
            return; // filhos já reposicionados; não descer neste nó
          }
        }
      }
      if (node.children) {
        // percorre de trás para frente: splice não desalinha os índices seguintes
        for (let i = node.children.length - 1; i >= 0; i--) {
          visit(node.children[i], i, node);
        }
      }
    };
    visit(tree, null, null);
  };
}
