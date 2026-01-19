type Graph = Record<string, string[]>;

const graph: Graph = {
  "you": ["alice", "bob", "claire"],
  "bob": ["anuj", "peggy"],
  "alice": ["peggy"],
  "claire": ["thom", "jonny"],
  "anuj": [],
  "peggy": [],
  "thom": [],
  "jonny": []
};

export default graph