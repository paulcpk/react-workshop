export const getModelTable = (model) => {
  return (
    <table className="table">
      <tbody>
        {model ? (
          Object.keys(model).map((key) => (
            <tr key={key}>
              <td>
                <strong>{key}:</strong>
              </td>
              <td>{model[key]}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Data:</td>
            <td>No data to show</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
