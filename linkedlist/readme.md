## 链表
- 插入尾部（append）
判断链表是否为空，为空则头结点为新节点。不为空，```while(current.next) { current = current.next }```跳出循环即 ```current.next```为空的情况，这时候把新节点赋给```current.next```即可。

- 删除指定位置上的节点（removeAt(position)）
请想起一个画面：一列连起来的火车🚂-🚃-🚃-🚃，找到要删除的那节车厢🚃（current）拿起他前面的铁链和后面的铁链，两条铁链直接连起来🚂-🚃-🚃，这个时候```current```就被从链表中断开了。  
所以我们需要一个```previous```和一个```current```指针，还有一个```index```，由于链表没有索引所以要用index一个一个加才能找到```position```的位置。
如果是头结点，直接让```head = head.next```，```head```就从链表中掉出来了。
如果是中间的，递增```index```，同时让```previous=current```，```current = current.next```，```index === position ```时，让 ```previous.next === current.next```。   
最后让 ```length--```，返回被删除的节点```current.element```。

- 插入指定位置（insert(position, element)）   
如果插在头部，让原来头部的元素撤下head的职务，给```element```，然后```element.next```指向原来的头部。
还是要用上面的断火车方法，使用```previous```，```current```，```index```，
先把```node.next = current```，再把```previous.next = node``` 成功return true.


### 总结
对链表的操作，由于链表无索引，所以经常离不开```index```记录现在遍历到链表的什么位置  
做插入，中间删除操作时离不开```previous```，（```current```是什么操作都要的），同时注意```衔接```，不要让本来在链表的元素从链表上断开。   

## 双向链表
就是一个节点既有指向前的指针，也有指向尾的指针，每个节点新增属性```prev```，链表新增属性：```tail```，指向最后一个元素。   
只有一个节点时```head```和```tail```都指向第一个节点。
往最后插入节点时，tail指向新元素，新元素的```prev```指向原来的尾节点。
往中间插入节点时，新节点头尾先指向前后两个节点，前面节点的```prev```和后面节点的```next```再指向新节点

## 循环链表
循环链表中，最后一个节点的```next```指向头节点，当删除最后一个节点时，要加个判断   
```if (previous.next === null) previous.next = head```（注意单向循环链表里没有```tail```这个概念）

双向循环链表则头部的```prev```指向```tail```，```tail```的```next```指向头节点。  
删除头节点和尾节点时都要记得让新的头和尾的```prev```和```next```不能置```null```.