hljs.configure({ useBR: true });

$('code').each(function (i, block) {
    hljs.highlightBlock(block);
});
