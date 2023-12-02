function huge(condition) {
    if (condition === "A") {
      // 処理 A（他の処理BCに関係しない）
       console.log('guj');
    } else if (condition === "B") {
      // 処理 B（他の処理ACに関係しない）
    } else if (condition === "C") {
      // 処理 C（他の処理ABに関係しない）
    }
  }
  
  // 影響範囲（この場合は３つとなる）
  huge("A");
  huge("B");
  huge("C");