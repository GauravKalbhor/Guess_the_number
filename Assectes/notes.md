Q. Whtat is AST in JS?

Abstract superclass of all Abstract Syntax Tree (AST) node types.

An AST node represents a JavaScript source code construct, such as a name, type, expression, statement, or declaration.

Each AST node belongs to a unique AST instance, called the owning AST. The children of an AST node always have the same owner as their parent node. If a node from one AST is to be added to a different AST, the subtree must be cloned first to ensure that the added nodes have the correct owning AST.

<img src="Assectes/Images/AST.png" alt="">
<img src="Assectes/Images/AST-Tree.png" alt="">

