package com.menu.util;

import com.menu.model.BaseEntity;
import com.menu.model.User;
import javassist.NotFoundException;

/**
 * Created by Timur on 16.08.2017.
 */
public class ValidationUtil {

    public static void checkId(BaseEntity baseEntity, int id) {
        if (baseEntity.getId() == null) {
            baseEntity.setId(id);
        } else if (baseEntity.getId() != id) {
            throw new IllegalArgumentException(baseEntity + " must be with id = " + id);
        }
    }

  //TODO методы для проверки id у delete, create...
}
