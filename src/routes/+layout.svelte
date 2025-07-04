<script lang="ts">
  import "../app.css";

  const { children } = $props();
</script>

<!-- 全体背景・フォント設定 -->
<div class="min-h-screen flex flex-col bg-black text-green-400 font-mono">
  <!-- Header 固定 -->
  <header
    class="p-4 border-b border-green-700 fixed top-0 left-0 right-0 z-10 bg-black"
  >
    <h1 class="text-lg font-bold uppercase tracking-widest">My Hacker App</h1>
  </header>

  <!-- スクロール可能なメインエリア -->
  <main class="flex-1 mt-16 mb-12 overflow-y-auto p-6">
    {@render children()}
  </main>

  <!-- Footer 固定 -->
  <footer
    class="p-4 border-t border-green-700 fixed bottom-0 left-0 right-0 z-10 bg-black text-xs text-green-500 text-center"
  >
    &copy; 2025 Hacker Inc.
  </footer>
</div>
