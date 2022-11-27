# 面试题

## vue与react区别

​ 这个话题不需要再深入思考了，到时候找个文章看看就行

## react如何实现类似vue的watch

```js
  const subjcetIdRef = useRef(subjectId)
  useEffect(() => {
    if (subjcetIdRef.current !== subjectId) { // 修改学科
      subjcetIdRef.current = subjectId;
      getListInfo(defaultPager);
    } else { // 修改其他筛选项
      getListInfo(defaultPager);
    }
  }, [subjectId]);
```
