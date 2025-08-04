# Estrutura de dados e algoritmos em javaScript

## Este repositório contém os exemplos práticos do livro estrutura de dados e algoritmos em javascript - Loiane Groner

### Pilha - stack

- Coleção ordenada de itens que obedece ao princípio LIFO (last in first out, isto é o último a entrar é o primeiro a sair)
- Adição de novos elementos ou remoção ocorre na mesma extremidade.
- O final da pilha é conhecido como topo, enquanto o lado oposto é conhecido como base.

### Fila - queue

- Coleção ordenada de itens baseado em FIFO (First IN First Out, isto é primeiro a entrar é o primeiro a sair)
- A adição de novos elementos em uma fila é feita na cauda (tail) e a remoção, na frente. O elemento mais recente adicionado na fila deve esperar no final dela.

### Deque - double-ended queue

- Estrutura de dados conhecida como fila de duas pontas. É uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila.
- Implementa os princípios tantos do FIFO quanto de LIFO, podemos também dizer que o deque combina as estruturas de dados da pilha e da fila.

### Lista ligada

- Estrutura de dados dinâmica, isso siginifica que podemos adicionar ou remover itens de modo que quisermos, e ela aumentará conforme for necessário.
- Os elementos não são posicionados de forma contínua na memória. Cada elemento é constituída de um nó que armazena o elemento propriamente dito, além de uma referência, também conhecida como ponteiro, que aponta para o próximo elemento.
- Em uma lista duplamente ligada, temos uma ligação dupla: uma para o próximo elemeto e outra para o elemento anterior. Ela nos oferece duas maneiras de iterar por ela: do início para o fim ou vice-versa. Também podemos acessar o próximo elemento ou elemento anterior de um nó em particular.

## Conjuntos (Set) em Desenvolvimento

Conjuntos são estruturas de dados fundamentais que armazenam elementos únicos, sem repetições. Eles são amplamente utilizados em algoritmos e aplicações para resolver problemas como:

- **Remover duplicatas** de listas ou arrays.
- **Verificar rapidamente** se um elemento pertence a um grupo.
- **Operações matemáticas** como união, interseção, diferença e subconjunto.
- **Gerenciamento de permissões**, tags, ou qualquer cenário onde a unicidade dos itens é importante.

No desenvolvimento de software, conjuntos ajudam a simplificar a lógica e melhorar a performance em tarefas que envolvem coleções de dados únicos. A implementação apresentada neste projeto demonstra como criar e manipular conjuntos em JavaScript, incluindo métodos para adicionar, remover, verificar existência, e realizar operações clássicas de teoria dos conjuntos.
