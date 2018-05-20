## 链表
- 插入尾部（append）
判断链表是否为空，为空则头结点为新节点。不为空，```while(current.next) { current = current.next }```跳出循环即 ```current.next```为空的情况，这时候把新节点赋给```current.next```即可。

- 删除指定位置上的节点（removeAt）
请想起一个画面：一列连起来的火车🚂-🚃-🚃-🚃，找到要删除的那节车厢🚃（current）拿起他前面的铁链和后面的铁链，两条铁链直接连起来🚂-🚃-🚃，这个时候current就被从链表中断开了。