"""empty message

Revision ID: a73a781c9dcb
Revises: 2af62c8edf0c
Create Date: 2024-02-26 18:13:15.253654

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a73a781c9dcb'
down_revision = '2af62c8edf0c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('contactanos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id_user', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'user', ['id_user'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('contactanos', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('id_user')

    # ### end Alembic commands ###