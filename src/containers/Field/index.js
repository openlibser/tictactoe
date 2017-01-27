import { connect } from 'react-redux';
import { toggleCell } from '../../actions';
import Field from '../../components/Field';

const mapStateToProps = state => ({
  rows: state.rows,
});

const mapDispatchToProps = ({
  onCellClick: toggleCell,
});

const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);

export default FieldContainer;
