import React from 'react';
import { Table } from 'semantic-ui-react';

const TableRes = ({ result }) => {
  return (
    <Table celled size="small" unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Navn</Table.HeaderCell>
          <Table.HeaderCell>Poeng</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          result.map(user => (
            <Table.Row key={user.Navn}>
              <Table.Cell>{user.Navn}</Table.Cell>
              <Table.Cell>{user.Poeng}</Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
}

export default TableRes;
