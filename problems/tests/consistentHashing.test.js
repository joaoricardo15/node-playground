const ConsistentHashing = require("../consistentHashing");

describe("consistentHashing", () => {
  test("should not return the correct node if there is only one node", () => {
    const loadBalancer = new ConsistentHashing(["node1"]);
    expect(loadBalancer.getNode("baita")).toBe("node1");
  });

  test("should not return the correct node if more than one nodes", () => {
    const loadBalancer = new ConsistentHashing(["node1", "node2"]);
    expect(loadBalancer.getNode("baita")).toBe("node2");
  });

  test("should not return the correct node after deleting a node", () => {
    const loadBalancer = new ConsistentHashing(["node1", "node2"]);
    expect(loadBalancer.getNode("baita")).toBe("node2");
    loadBalancer.removeNode("node2");
    expect(loadBalancer.getNode("baita")).toBe("node1");
  });

  test("should not return the correct node after adding a node", () => {
    const loadBalancer = new ConsistentHashing(["node1"]);
    expect(loadBalancer.getNode("baita")).toBe("node1");
    loadBalancer.addNode("node2");
    expect(loadBalancer.getNode("baita")).toBe("node2");
  });
});
