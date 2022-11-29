## Workshop script

### Timeline

1. Explain what you will do today, show the repo, run install and dev
2. Explain the application structure, Show app, show db
3. Talk about how state manipulation influences render behaviour (Profiler, logging, optimization)
4. Add one more (dummy) useEffect
5. Extract postList into separate PostList component with memo()
6. Then useMemo() with the inline method, forget about "postList is not a function", then forget the deps -> explain the errors
7. Extract PostList component into separate component, make sure everything still works, then add spec list
8. Add expanded state, start in the parent component, show the added feature, explain data flow
9. Show weird cache break and fix it using useCallback
10. Maybe, show additional example of data flow using cacheFunc and cachePosts
11. Maybe, show additional example using expensiveCalculation
