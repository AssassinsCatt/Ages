using System;
using System.Data.SqlClient;

class Program
{
    static void Main(string[] args)
    {
        string connectionString = "yourConnectionString";

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            string sql = "SELECT * FROM Users";
            using (SqlCommand command = new SqlCommand(sql, connection))
            {
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Console.WriteLine($"{reader["Id"]}, {reader["Name"]}");
                    }
                }
            }
        }
    }
}
