export default function UserInput() {
  return (
    <form className='user-input-container'>
      <div className='user-input-group'>
        <label>
          Initial Investment
          <input type='number' name='initial-investment' />
        </label>
        <label>
          Annual Investment
          <input type='number' name='annual-investment' />
        </label>
      </div>
      <div className='user-input-group'>
        <label className='user-input-label'>
          Initial Investment
          <input type='number' name='expected-return' />
        </label>
        <label>
          Duration
          <input type='number' name='duration' />
        </label>
      </div>
    </form>
  );
}
