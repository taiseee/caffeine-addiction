# ハックツハッカソン / オンデンカップ / teams_カフェイン中毒

## テーマ

AWS × データ

## 作成するアプリケーション

### アプリケーション名

未定

### アプリケーションの概要

入力された単語をベクトル化し，類似度でマッチングを行う．

## 環境構築

1. このリポジトリをクローンする

    ``` bash
    git clone git@github.com:taiseee/caffeine-addiction.git
    ```

2. ディレクトリに移動する

    ``` bash
    cd caffeine-addiction
    ```

3. dockerイメージを作成する

    ``` bash
    docker-compose build
    ```

4. dockerコンテナを起動する

    ``` bash
    docker-compose up -d
    ```

5. migrationを実行する

    ``` bash
    sh bash_backend.sh

    cd database

    alembic upgrade head
    ```

6. 動作確認

    - react: [http://localhost:3000](http://localhost:3000)にアクセス

    - fastapi: [http://localhost:8000](http://localhost:8000)にアクセス

7. dockerコンテナを停止と削除

    ``` bash
    docker-compose down
    ```
