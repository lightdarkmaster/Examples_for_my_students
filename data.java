public class data{
    private String data;

    public data(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    public String generateSummary() {
        if (data == null || data.isEmpty()) {
            return "No data available";
        }
        int length = data.length();
        return "Data length: " + length + " characters";
    }
}