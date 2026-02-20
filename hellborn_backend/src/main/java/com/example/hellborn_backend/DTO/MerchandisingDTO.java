package com.example.hellborn_backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class MerchandisingDTO {

    private Integer id;
    private String nombre;
    private Float precio;
    private Float stock;
    private String tipo;
    private String urlImg;
}
