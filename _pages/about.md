<style>
  /* 隐藏首页重复出现的 News 区块（academicpages 模板问题） */
  .page__content ~ h2,
  .page__content ~ .archive__item,
  .archive__subtitle {
    display: none !important;
  }

  /* 全站正文段落与列表两端对齐 */
  .page__content p,
  .page__content li {
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.6;
  }

  /* ===== Journal name: Green ===== */
  .journal-name {
    display: inline;
    background: rgba(46, 160, 67, 0.18);
    border: 1px solid rgba(46, 160, 67, 0.50);
    color: inherit;
    padding: 0.08em 0.36em;
    border-radius: 0.3em;
    font-style: italic;
    font-weight: 500;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  /* ===== Conference name: Blue ===== */
  .conference-name {
    display: inline;
    background: rgba(47, 129, 247, 0.18);
    border: 1px solid rgba(47, 129, 247, 0.50);
    color: inherit;
    padding: 0.08em 0.36em;
    border-radius: 0.3em;
    font-style: italic;
    font-weight: 500;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
</style>
