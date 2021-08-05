import app from './app';

/* ポート番号指定 */
const port = process.env.PORT || 3030;

/* サーバー起動 */
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
