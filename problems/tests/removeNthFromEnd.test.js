const { removeNthFromEnd, ListNode } = require("../removeNthFromEnd");

describe("hasCycle", () => {
  const maxLenght = 1000;
  const randomNumber1 = Math.floor(Math.random() * maxLenght);
  const randomNumber2 = Math.floor(Math.random() * maxLenght);
  const randomNumber3 = Math.floor(Math.random() * maxLenght);

  const head1 = new ListNode(randomNumber1);
  const newHead1 = removeNthFromEnd(head1, 1);
  test("should return the same list when input is an single node list", () => {
    expect(newHead1).toEqual(null);
  });

  const nodeAfterHead2 = new ListNode(
    randomNumber2,
    new ListNode(randomNumber3),
  );
  const head2 = new ListNode(randomNumber1, nodeAfterHead2);
  const newHead2 = removeNthFromEnd(head2, 3);
  test("should return next node from head when input is an linked list with length equal n", () => {
    expect(newHead2.val).toEqual(nodeAfterHead2.val);
  });
});
