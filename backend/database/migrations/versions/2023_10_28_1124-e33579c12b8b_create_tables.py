"""create tables

Revision ID: e33579c12b8b
Revises: 
Create Date: 2023-10-28 11:24:12.177298

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = 'e33579c12b8b'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('sexes',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('created_at', mysql.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.Column('updated_at', mysql.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('password', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('name', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('sex', sa.Integer(), nullable=True),
    sa.Column('personality', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('hobby', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('self_introduction', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('image_url', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('line_url', sa.String(length=255, collation='utf8mb4_bin'), nullable=True),
    sa.Column('created_at', mysql.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.Column('updated_at', mysql.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('sexes')
    # ### end Alembic commands ###